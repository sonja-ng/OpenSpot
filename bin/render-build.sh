#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
<<<<<<< Updated upstream
bundle exec rake assets:precompile
bundle exec rake assets:clean
bundle exec rake db:migrate
=======
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate
>>>>>>> Stashed changes
