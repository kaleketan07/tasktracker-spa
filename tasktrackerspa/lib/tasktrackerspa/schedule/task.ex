defmodule Tasktrackerspa.Schedule.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :body, :string
    field :status, :boolean, default: false
    field :timespent, :integer
    field :title, :string
    belongs_to :user, Tasktrackerspa.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:body, :status, :timespent, :title, :user_id])
    |> validate_required([:body, :status, :title, :user_id])
  end
end
