class AppointmentsController < ApplicationController
  before_action :set_doctor :set_user 
  def index
    # @comments = Comment.all
    @appointments = @doctor.appointments
    render component: 'Appointments', props: { doctors: @doctors, appointments: @appointments }
  end

  def show
    @appointment = @doctor.appointments.find(params[:id])
    render component: 'Appointment', props: { doctor: @doctor, appointment: @appointment }
  end

  def new
    @appointment = doctor.appointments.new
    render component: 'AppointmentNew', props: {doctor: @doctor, appointment: @appointment}
  end

  def edit
    @appointment = doctor.appointments.find(params[:id])
    render component: 'AppointmentEdit', props: { doctor: @doctor, appointment: @appointment}
  end

  def create
    @appointment = doctor.appointments.new(song_params)
    if @appointment.save
      redirect_to users_path
    else
      render component: 'AppointmentNew', props: {doctor: @doctor, appointment: @appointment}
    end
end

def update
  @appointment = doctor.appointments.find(params[:id])
  if @appointment.update(appointment_params)
    redirect_to users_path
  else
    render component: 'AppointmentEdit', props: {doctor: @doctor, appointment: @appointment}
  end
end

def destroy
  @appointment = @doctors.appointments.find(params[:id])
  @appointment.destroy
  redirect_to users_path
end

private 
  def set_doctors
    @doctor = Doctor.find(params[:doctor_id])
  end

  def appointment_params
    params.require(:appointment).permit(:title, :body)
  end
end