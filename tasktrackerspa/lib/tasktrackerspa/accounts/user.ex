defmodule Tasktrackerspa.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    field :password, :string, virtual: true

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:email, :name, :password])
    |> put_pass_hash()
    |> validate_required([:email, :name,:password_hash])
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:name)

  end
## the following code has been adopted from the Comeonin documentation
  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes:
    %{password: password}} = changeset) do
      change(changeset, Comeonin.Argon2.add_hash(password))
    end
  defp put_pass_hash(changeset), do: changeset


end
