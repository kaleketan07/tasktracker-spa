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
    a = Repo.insert!(%User{email: "alice@abc.com", name: "Alice"})
    b = Repo.insert!(%User{email: "bob@abc.com", name: "Bob"})
    c = Repo.insert!(%User{email: "carol@abc.com", name: "Carol"})
    d = Repo.insert!(%User{email: "danny@abc.com", name: "Danny"})


    Repo.delete_all(Task)
    Repo.insert!(%Task{user_id: a.id, body: "Bring Bread ASAP ", title: "Bread"})

  end

end

Seeds.run
