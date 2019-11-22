class ExcretaController < ApplicationController
  def index
    @excretum = Excretum.new
  end

  def create
    @excretum = Excretum.create(excreta_params)
  end

  private
  def excreta_params
    params.require(:excretum).permit(:excreta_type)
  end
end
