import React from "react";
import { useMutation } from "react-query";
import { createUser } from "../utils/user-api";
import { useHistory } from "react-router";

const Signup = () => {
  const history = useHistory();
  const mutation = useMutation(createUser, {
    onSuccess: () => {
      history.push("/login");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());
    data.username = data.username.toLowerCase();
    mutation.mutate(data);
  };

  return (
    <div className="grid place-items-center">
      <div className="w-96 space-y-5 m-10">
        <h1 className="font-heading font-extrabold italic text-center text-2xl text-hotmagenta">
          Museq
        </h1>

        <form
          className="bg-violetcard p-10 rounded-2xl flex flex-col space-y-4"
          onSubmit={onSubmit}
        >
          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="name">Nombre</label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="text"
              name="name"
              id="name"
              placeholder="p.e. Gerardo"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="last_name">Apellido</label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="p.e. Torres"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="username">Nombre de usuario</label>
            <label className="text-xs opacity-60" htmlFor="username">
              Sin espacios
            </label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="text"
              name="username"
              id="username"
              placeholder="p.e. gistypical"
              pattern="[\w]+"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="password">Contraseña</label>
            <label className="text-xs opacity-60" htmlFor="username">
              Debe de tener 4 caracteres o más
            </label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="password"
              name="password"
              id="password"
              pattern="[\w]{4,}"
              required
            />
          </fieldset>

          <button type="submit">Registrarse</button>

          {/* Status messages */}
          {mutation.isLoading && (
            <p className="text-sm text-center">
              Registrando usuario, espere...
            </p>
          )}
          {mutation.isError && mutation.error.response.status === 409 && (
            <p className="text-sm text-center text-selectiveyellow">
              El nombre de usuario ingresado ya existe
            </p>
          )}
          {mutation.isError && mutation.error.response.status !== 409 && (
            <p className="text-sm text-center text-red-500">
              Ha ocurrido un error al completar la solicitud
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
