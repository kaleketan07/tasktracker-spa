defmodule TasktrackerWeb.TaskView do
  use TasktrackerWeb, :view
  alias TasktrackerWeb.TaskView

  def render("index.json", %{tasks: tasks}) do
    %{data: render_many(tasks, TaskView, "task.json")}
  end

  def render("show.json", %{task: task}) do
    %{data: render_one(task, TaskView, "task.json")}
  end

  def render("task.json", %{task: task}) do
    %{id: task.id,
      body: task.body,
      status: task.status,
      timespent: task.timespent,
      title: task.title}
  end
end
