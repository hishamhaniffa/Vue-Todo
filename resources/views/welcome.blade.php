<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>

    <link rel="stylesheet" href="{{ url('css/app.css') }}">
    
</head>
<body>

    <div class="container" id="vue-app">
        <div class="row">
            <div class="col-sm-12">
                @include('partials/top-menu')
                <h1>Welcome to Vue.js edited</h1>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-7">
                <div class="panel panel-default">
                    <div class="panel-heading">My Todos</div>
                    <div class="panel-body">
                        {{-- Body content start --}}
                        <todo-item ></todo-item>
                        <todo-add-form :newtodo.sync="newTodo"></todo-add-form>
                        {{-- Body content end --}}
                    </div>
                </div>
            </div>

            <div class="col-sm-5">
                <div class="panel panel-default">
                    <div class="panel-heading">My Todos</div>
                    <div class="panel-body">
                        <p>This is the sidebar where something else will come.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<script src="{{ url('js/plugins/jquery-2.2.4.min.js') }}"></script>
<script src="{{ url('js/plugins/bootstrap.min.js') }}"></script>
<script src="{{ elixir('js/main.js') }}"></script>
</body>
</html>
