class Excretum < ApplicationRecord
  def self.yesterdays_diapers
    self.where(created_at: Time.zone.yesterday.beginning_of_day..Time.zone.yesterday.end_of_day)
  end

  def self.todays_diapers
    self.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day)
  end
end
