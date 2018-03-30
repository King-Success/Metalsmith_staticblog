// console.log('hello world')
var articleComment = {
    template: `
        <div>
        <h3>Comment</h3>
        <div class="form-group">
        <input type="text" class="form-control" placeholder="Name" v-model="name" />
        </div>
        <div class="form-group">
        <textarea class="form-control" placeholder="Comment here..." v-model="content"></textarea>
        </div>
        <button class="btn btn-info" @click="onSubmit()">Submit</button><br><br>
        <h4 v-if="comments.length > 0">Existing Comments</h4>
        <div class="list-group">
        <a class="list-group-item" v-for="comment in comments">
            <h4 class="list-group-item-heading">{{comment.name}}</h4>
            <h6 class="list-group-item-heading text-info">{{comment.date}}</h6>
            <p class="list-group-item-text">{{comment.content}}</p>
        </a>
        </div>
        </div>
    `,
    data(){
        return{
            comments:[],
            name:'',
            content:''
        }
    },
    methods:{
        onSubmit(){
            this.comments.push({
                name:this.name,
                content:this.content,
                date: moment().format("ddd DD-MM-YYYY")
            });
            this.name = ""
            this.content =""
        }
    }
}
new Vue({
    el:'#app',
    components:{
        'comment': articleComment
    }
})