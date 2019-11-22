module ExcretaHelper
  def yesterdays_urine_diaper
    Excretum.yesterdays_diapers.where(excreta_type: "urin").count
  end

  def todays_urine_diaper
    Excretum.todays_diapers.where(excreta_type: "urin").count
  end

  def yesterdays_feces_diaper
    Excretum.yesterdays_diapers.where(excreta_type: "avføring").count
  end

  def todays_feces_diaper
    Excretum.todays_diapers.where(excreta_type: "avføring").count
  end
end
