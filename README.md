## Getting Started

### Ensure you have installed [NodeJS 22](https://nodejs.org), [Composer 2.8](https://getcomposer.org) and [PHP 8](https://www.php.net/) on your machine.

### 1. install dependencies

```powershell
npm install
composer install
```

### 2. generate and configure the .env file

- 1. generate

```powershell
copy .env.example .env
```

- 2. configure database (_the kind of database and the database's name_)

```txt
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel 
# DB_USERNAME=root
# DB_PASSWORD=
```

### 3. Create an application key

```powershell
php artisan key:generate
```

### 4. Database migration

```powershell
php artisan migrate
```

### 4. Run the development server

```powershell
composer run dev
```

Open <a href="http://127.0.0.1:8000">http://127.0.0.1:8000</a> with your browser to see the result.

### Run Meilisearch
```powershell
php artisan scout:flush "App\Models\Book"    
php artisan scout:flush "App\Models\Category"    
```

```powershell
php artisan scout:sync-index-settings
```

```powershell
php artisan migrate:fresh --seed
```

```powershell
./meilisearch
```

_set meilisearch master key_
Then rerun Meilisearch
```powershell
./meilisearch
```
