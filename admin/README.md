# Teamwork Equals Money Admin App




## Getting started

The best way to get started with this project is to use the Yeoman generator.

```bash
npm install -g yo
npm install -g generator-react-aspnet-boilerplate
```

Then generate your new project:

```
yo react-aspnet-boilerplate
```

You can also generate a clean template (no authentication/account management) with another generator:

```bash
yo react-aspnet-boilerplate:empty-template
```

After you have your new project generated, let's run that app!

```bash
cd src/ReactBoilerplate
npm install
gulp
dotnet restore
# The following line is only for the 'master' branch, which has a database backend (user management).
# It is not needed when using 'empty-template'.
dotnet ef database update
dotnet run
```


## What is next?

I will be adding features to this project as time goes on to help me get started with new React projects in .NET. So, expect some more things. I am also open to contributions or recommendations.

I started with [react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate), and have added functionality on top.
"# TEM-Admin" 
