
## How to deploy this login app locally

1. Go inside the project folder;

2. Open command prompt window.

```bash
$ cd login
```

3. Open the project with VS Code;

```bash
$ code .
```

4. Open Terminal inside VS Code.

5. Execute the following command inside the terminal to install necessary PHP dependencies;

```bash
$ composer install
```

6. Edit the .env file;

**Edit DB_DATABASE / DB_USERNAME / DB_PASSWORD*

```bash
...
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=login
DB_USERNAME=root
DB_PASSWORD=admin
...
```

7. Execute the following command to migrate database;

**You need to have "!! Your Database Name !!" database in your MySQL database server in advance...*


```bash
$ php artisan migrate
```

8. Open another Terminal window and then execute the following command;

Execute the following command inside the terminal to install necessary package libraries;

```bash
$ yarn
```

```bash
$ yarn dev
```

9. Open another Terminal window and then execute the following command;

```bash
$ php artisan key:generate
```

```bash
$ php artisan serve
```

10. Open http://127.0.0.1:8000/

"# login" 
