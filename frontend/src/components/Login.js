import React from "react";
import { useHistory } from "react-router";
import { useMutation } from "react-query";
import { loginUser } from "../utils/user-api";

const Login = () => {
  const history = useHistory();
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      console.log(response.data);
      history.push("/home");
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
            <label htmlFor="password">Nombre de usuario</label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="text"
              name="username"
              id="username"
              placeholder="e.j: gistypical"
              required
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-1">
            <label htmlFor="password">Contraseña</label>
            <input
              className="rounded-xl p-2 bg-violetinput"
              type="password"
              name="password"
              id="password"
              pattern="[\w]{4,}"
              required
            />
          </fieldset>

          <button type="submit">Iniciar sesión</button>
          {/* Status messages */}
          {mutation.isLoading && (
            <p className="text-sm text-center">
              Verificando datos, por favor espere...
            </p>
          )}
          {mutation.isError && mutation.error.response.status === 401 && (
            <p className="text-sm text-center text-selectiveyellow">
              Usuario y/o contraseña son incorrectos
            </p>
          )}
          {mutation.isError && mutation.error.response.status !== 401 && (
            <p className="text-sm text-center text-red-500">
              Ha ocurrido un error al completar la solicitud
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
