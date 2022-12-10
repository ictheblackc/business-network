# Business Network

### Back-end:

First run:
```shell
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver
```

Run:
```shell
python3 manage.py runserver
```

Create super user for work:
```shell
python3 manage.py createsuperuser
```

Email: admin@mail.com
password: qwerty!12345


### Front-end:

First run
```shell
cp .env.development .env.local
yarn install
yarn build
yarn start
```

Run:
```shell
yarn build
yarn start
```
