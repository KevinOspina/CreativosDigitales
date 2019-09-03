<template>
   <div>
   
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">Administrador de tareas</a>
    </nav> 

    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="agregarTarea">

                            <div class="form-group">
                                <textarea cols="30" 
                                v-model="tarea.descripcion"
                                rows="10"
                                class="form-control"
                                placeholder="Describe la tarea que debes cumplir"></textarea>
                            </div>

                            <div class="form-group">
                                <input type="text" 
                                v-model="tarea.fecha"
                                placeholder="¿Cuando debes realizar esta tarea? (2019-05-03)"
                                class="form-control">
                            </div>

                            <div class="form-group">
                                <input type="text" 
                                v-model="tarea.prioridad"
                                placeholder="¿Que prioridad tiene esta tarea? (Alta, Media,Baja)"
                                class="form-control">
                            </div>

                            
                            <button class="btn btn-primaru
                            btn-block" style="">Enviar nueva tarea</button>

                        </form>
                    </div>

                </div>

            </div>

        </div>

    
    </div>


</div>
</template>

<script>


class Tarea{
    constructor(descripcion,fecha,prioridad){
        this.descripcion=descripcion;
        this.fecha=fecha;
        this.prioridad=prioridad;
    }
}


export default {
    data(){
        return{
            tarea:{
               tarea: new Tarea()
            }
        }
    },
    methods:{
        agregarTarea(){
            fetch('/tareas/add',{
                method: 'POST',
                body: JSON.stringify(this.tarea),
                headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res =>  res.json())
            .then(data => console.log(data))

            this.tarea =  new Tarea()
        }
    }
}
</script>