# booklite-ui

The repository for the client side of the booklite site. The service uses the Angular framework for the UI.


# Running locally

Fork and clone this repository. Run the following to start the server on http:localhost:8080
```
npm install
npm run start
```

# Running in production environment

Once you have made your changes, commit and push them and then run the following:

```
npm run build
```

You must then SSH into the ubuntu server hosting our services, and then navigate to /opt/front-end.
Here you must create a new directory of the format "YYYY-MM-DD-##" Where ## is the number of the build on that day, e.g 2020-04-30-1 for the first build on 30/4/20.
Once you have navigated into this directory, copy your dist files generated from npm build into here.
Navigate to /etc/nginx/default, and change the server location to:
```
root /opt/front-end/<your build name>/dist
```

Once this is done, you must restart nginx by calling
```
sudo systemctl restart nginx
```
The UI will now be running.