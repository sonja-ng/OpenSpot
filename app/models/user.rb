# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#  fname           :string           not null
#  lname           :string           not null
#  phone           :string           not null
#
class User < ApplicationRecord
    validates :password_digest, :phone, :lname, :fname, presence: true
    validates :password, length: {minimum: 6 }, allow_nil: true
    validates :session_token, presence: true, uniqueness: true
    validates :username, :email, presence: true, uniqueness: true
    validate :validate_email

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :reviews,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Review

    has_many :rests_reviewed,
        through: :reviews,
        source: :Rest

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

    private 
    def validate_email
        if !email.include?("@")
            errors.add(:email, "must include @")
        end
    end

end
