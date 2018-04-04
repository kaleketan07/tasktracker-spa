# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :tasktrackerspa,
  ecto_repos: [Tasktrackerspa.Repo]

# Configures the endpoint
config :tasktrackerspa, TasktrackerspaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "fDJX051ORrd3J6lChMBEaKWsyMW35R4OZ4QbHfkrBCrQQE75ec9md1/FR8u+YE6h",
  render_errors: [view: TasktrackerspaWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tasktrackerspa.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
