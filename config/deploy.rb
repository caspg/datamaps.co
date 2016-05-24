lock '3.5.0'

set :application, 'deltamike_node'
set :repo_url,    'git@bitbucket.org:caspg/deltamike-node.git'
set :user,        'caspg'

set :deploy_to, "/home/#{fetch(:user)}/apps/#{fetch(:application)}"

set :linked_dirs, %w(
  node_modules
  log
)

set :keep_releases, 3

namespace :deploy do
  desc 'Make sure local git is in sync with remote.'
  task :check_revision do
    on roles(:app) do
      unless `git rev-parse HEAD` == `git rev-parse origin/master`
        puts 'WARNING: HEAD is not the same as origin/master'
        puts 'Run `git push` to sync changes.'
        exit
      end
    end
  end

  desc 'Initial Deploy'
  task :initial do
    on roles(:app) do
      before 'deploy:restart', 'deploy:start'
      invoke 'deploy'
    end
  end

  desc 'Stop application'
  task :stop do
    on roles(:app) do
      execute "cd '#{release_path}'; forever stop deltamike_node;"
    end
  end

  desc 'Start application'
  task :start do
    on roles(:app) do
      execute "cd '#{release_path}'; npm run start-server-prod > /dev/null 2>&1 &"
    end
  end

  desc 'Build react file'
  task :build do
    on roles(:app) do
      execute "cd '#{release_path}'; npm run build"
    end
  end

  before :starting, :check_revision
  after :finishing, :build
  after :finishing, :restart
  after :finishing, :start
end
