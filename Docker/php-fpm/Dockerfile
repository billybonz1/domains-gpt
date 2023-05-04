FROM php:8.1-fpm

MAINTAINER Web Quantum <bewebtoday@gmail.com>

# Install NPM
RUN apt-get update && apt-get install -y nodejs npm

RUN apt-get update && apt-get install -y \
    git \
    libmcrypt-dev \
    unzip \
    libbz2-dev \
    libgmp-dev \
    libpng-dev \
    zlib1g-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libgd-dev \
    jpegoptim optipng pngquant gifsicle



# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Set timezone to UTC
RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/UTC /etc/localtime
RUN "date"

# Type docker-php-ext-install to see available extensions
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg
RUN docker-php-ext-install pdo pdo_mysql bcmath bz2 gmp gd

WORKDIR /var/www/laravel
