defmodule Tasktrackerspa.Repo.Migrations.CreateTasks do
  use Ecto.Migration

  def change do
    create table(:tasks) do
      add :body, :text, null: false
      add :status, :boolean, default: false, null: false
      add :timespent, :integer
      add :title, :string, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:tasks, [:user_id])
  end
end
