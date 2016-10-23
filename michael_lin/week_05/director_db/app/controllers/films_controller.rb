class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def new
    @film = Film.new
  end

  def create
    # raise params.inspect
    film = Film.create film_params
    redirect_to film
  end

  def destroy
    film = Film.find params[:id]
    film.destroy
    redirect_to films_path
  end

  def edit
    @film = Film.find params[:id]
  end

  def update
    film = Film.find params[:id]
    film.update film_params
    redirect_to film
  end

  def show
    @film = Film.find params[:id]
  end

  private
  def film_params
    params.require(:film).permit(:title, :release_year, :genre, :poster, :plot, :director_id)
  end
end
