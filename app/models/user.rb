class User < ApplicationRecord
    validates :display_name, :password_digest, :first_name, :last_name, :email, :phone_number, presence: true
    validates :display_name, :email, :phone_number, uniqueness: true
    validates :password, length: {minimum: 6 }, allow_nil: true 

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(display_name, password)
        user = User.find_by(display_name: display_name)
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
