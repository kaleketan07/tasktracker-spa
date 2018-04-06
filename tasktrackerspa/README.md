# Tasktrackerspa

This is a Task Tracing application that allows a user to:

- Register an account
- Log in/out of that Account
- Create, edit and delete Tasks
- Assign tasks to himself or other Users


The major design choices that I had to make are:
- The visibility of current users and tasks to anyone even if the user does not have an Account
  as there was no harm in displaying them as far as they are not editable
- The Tasks visible on the feed of "Alice" are the tasks that have been assigned to Alice
- Alice can edit only the tasks that have been assigned to Alice
