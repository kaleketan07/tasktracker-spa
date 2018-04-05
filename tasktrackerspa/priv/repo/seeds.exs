# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Tasktrackerspa.Repo.insert!(%Tasktrackerspa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
defmodule Seeds do
  alias Tasktrackerspa.Repo
  alias Tasktrackerspa.Accounts.User
  alias Tasktrackerspa.Schedule.Task

  def run do
    Repo.delete_all(User)
    p1 = Comeonin.Argon2.hashpwsalt("password1")
    p2 = Comeonin.Argon2.hashpwsalt("password1")
    p3 = Comeonin.Argon2.hashpwsalt("password1")
    p4 = Comeonin.Argon2.hashpwsalt("password1")
    a = Repo.insert!(%User{email: "alice@abc.com", name: "Alice", password_hash: p1})
    b = Repo.insert!(%User{email: "bob@abc.com", name: "Bob", password_hash: p2})
    c = Repo.insert!(%User{email: "carol@abc.com", name: "Carol", password_hash: p3})
    d = Repo.insert!(%User{email: "danny@abc.com", name: "Danny",password_hash: p4})


    Repo.delete_all(Task)
    Repo.insert!(%Task{user_id: a.id, body: "Bring Bread ASAP ", title: "Bread"})

  end

end

Seeds.run
