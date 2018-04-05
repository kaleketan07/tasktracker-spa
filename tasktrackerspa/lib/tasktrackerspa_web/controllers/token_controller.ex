defmodule TasktrackerspaWeb.TokenController do
  use TasktrackerspaWeb, :controller
  alias Tasktrackerspa.Accounts.User

  action_fallback TasktrackerspaWeb.FallbackController

  def create(conn, %{"email"=> email, "name" => name, "password" => pass}) do
    with {:ok, %User{} = user} <- Tasktrackerspa.Accounts.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
