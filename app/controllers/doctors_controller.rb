class DoctorsController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @doctors = Doctor.all 
    render component: 'Doctors', props: { users: @users, doctors: @doctors }
  end

  def show
    render component: 'Doctor', props: { user: @user, doctor: @doctor }
  end

  def new
    @doctor = Doctor.new
    render component: 'DoctorNew', props: { user: @user, doctor: @doctor }
  end

  def create 
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      redirect_to Doctors_path
    else
      render component: 'DoctorNew', props: { user: @user, doctor: @doctor }
    end
  end

  def edit
    render component: 'DoctorEdit', props: { user: @user, doctor: @doctor }
  end

  def update
    if @doctor.update(course_params)
      redirect_to Doctors_path
    else
      render component: 'DoctorEdit', props: { user: @user, doctor: @doctor }
    end
  end

  def destroy
    @doctor = @user.doctors.find(params[:id])
    @doctor.destroy
    redirect_to Doctors_path
  end

  private 
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    def doctor_params
      params.require(:doctor).permit(:title, :desc)
    end
end
