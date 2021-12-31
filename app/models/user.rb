class User < ApplicationRecord
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6 }, allow_nil: true
    validates :session_token, presence: true, uniqueness: true
    validates :username, :email, presence: true, uniqueness: true

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom::base64
    end

    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.generate_session_token
        save!
        self.session_token
    end
end
