## Installation

Follow these steps to install the project:

1. Clone the repository:

    ```
    git clone https://github.com/davidKirshbom/cloudHIro_test.git
    ```

2. Navigate into the project directory:

    ```
    cd cloudHIro_test
    ```

3. Install the Composer dependencies:

    ```
    composer install
    ```

4. Install the npm dependencies:

    ```
    npm install
    ```

5. build react app:

    ```
    npm run build
    ```

6. Copy the example environment file and make the required configuration changes in the .env file :

    ```
    cp .env.example .env
    ```

7. Generate a new application key:

    ```
    php artisan key:generate
    ```

8. Run the database migrations (Set the database connection in .env before migrating):
    ```
    php artisan migrate
    ```

## Usage

To run the project, use the following command:

    ```
    php artisan serve
    ```
