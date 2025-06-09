## Getting Started

### Ensure you have installed [NodeJS 22](https://nodejs.org), [Composer 2.8](https://getcomposer.org) and [PHP 8](https://www.php.net/) on your machine.

### 1. install dependencies

```powershell
npm install --legacy-peer-deps
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

1. **Download Meilisearch**

   Download from [https://sourceforge.net/projects/meilisearch.mirror/](https://sourceforge.net/projects/meilisearch.mirror/)

2. **Set Meilisearch Master Key**

   Before running Meilisearch, set the master key in your environment variables or as a command argument.

   ```
   MEILISEARCH_KEY=masterkey
   ```

3. **Start Meilisearch**

   ```powershell
   ./meilisearch
   ```

   ```

   If you published, configure `config/scout.php` as needed (see below for example).

4. **Configure `.env`**

   Add or update these lines in your `.env` file:

   ```
   SCOUT_QUEUE=true
   SCOUT_IDENTIFY=true
   SCOUT_DRIVER=meilisearch
   MEILISEARCH_HOST=http://127.0.0.1:7700
   MEILISEARCH_KEY=masterkey
   ```
5. **Sync Index Settings**

   ```powershell
   php artisan scout:sync-index-settings
   ```

6. **Flush Existing Indexes (if needed)**

   ```powershell
   php artisan scout:flush "App\Models\Book"
   php artisan scout:flush "App\Models\Category"
   ```

7. **Migrate and Seed Database**

   ```powershell
   php artisan migrate:fresh --seed
   ```