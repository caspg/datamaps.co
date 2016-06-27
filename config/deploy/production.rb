server '52.208.173.65', port: 22, roles: [:web, :app, :db], primary: true

set :ssh_options, {
  forward_agent: true,
  user: fetch(:user),
  auth_methods: ['publickey'],
  keys: %w(~/.ssh/aws_keys.pem)
}
set :stage,       :production
set :branch,      'master'
