defmodule Tasktracker.Schedule.Task do
  use Ecto.Schema
  import Ecto.Changeset
  alias Tasktracker.Schedule.Task


  schema "tasks" do
    field :body, :string
    field :status, :boolean, default: false
    field :timespent, :integer
    field :title, :string
    field :user_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Task{} = task, attrs) do
    task
    |> cast(attrs, [:body, :status, :timespent, :title])
    |> validate_required([:body, :status, :timespent, :title])
  end
end
