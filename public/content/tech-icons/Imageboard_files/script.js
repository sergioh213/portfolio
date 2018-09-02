(function(){
    console.log("sanity");

    Vue.component('image-modal', {
        data: function() {
            return {
                image: '',
                title: '',
                desc: '',
                user: '',
                coment: '',
                date: '',
                url: '',
                coments: [],
                error: '',
                active: null,
                hide: true,
                processedComment: '',
                message: '',
                info: false
            }
        },
        props: [ 'id' ],
        mounted: function() {
            var self = this
            this.getImage()
        },
        watch: {
            id: function() {
                this.getImage();
            }
        },
        template: '#my-template',
        methods: {
            getImage: function() {
                var self = this
                axios.get("/images/" + this.id).then(function(results) {
                    self.title = results.data.image.title;
                    self.desc = results.data.image.description;
                    self.username = results.data.image.username;
                    self.url = results.data.image.url;
                    self.image = results.data.image
                })
                axios.get("/coments/" + self.id)
                .then(function(results) {
                    if (results.data.coments.length < 1) {
                        self.error = "No coments yet";
                    } else {
                        self.error = null
                        self.coments = results.data.coments;
                    }
                }).catch(function(err){
                    console.log(err);
                })
            },
            close: function() {
               this.$emit('close', null)
            },
            post: function() {
                var self = this
                var firstLetter = this.user.charAt(0).toUpperCase()
                var restOfUser = this.user.slice(1)
                var user = firstLetter + restOfUser
                if (!this.user == '' && !this.coment == '') {
                    self.processText()
                    axios.post("/coment/" + self.id, {user, coment: self.processedComment})
                    .then(function(res) {
                        if (res.data.success) {
                            self.message = 'Comment successfuly posted!'
                            self.active = null
                            self.hide = true
                            self.error = null
                            self.coments.unshift(res.data.coment)
                            self.coment = res.data.coment
                            self.user = ''
                            self.coment = ''
                        }
                    }).catch(function(err){
                        console.log(err);
                    })
                } else {
                    self.error = 'Please provide username and comment body'
                }
            },
            deploy: function(e) {
                this.active = true
                this.hide = null
                this.message = null
            },
            deleteComment: function(id) {
                var self = this
                self.message = 'Comment deleted'
                axios.post("/deletecoment/" + id)
                    .then(function(res) {
                    })
                this.coments = this.coments.filter(elem => {
                    return elem.id != id
                })
            },
            processText: function() {
                var textarea = document.getElementById('coment-field').value;
                var processedComment = textarea.replace(/\n\r?/g, "<br />")
                this.processedComment = processedComment
            },
            showInfo: function() {
                console.log("showInfo function happening");
                this.info = true
            }
        }
    })

    var app = new Vue({
        el: '#main',
        data: {
            heading: "Upload images, delete them, comment on them!",
            images: [],
            imageToUpload: {
                title: '',
                desc: '',
                username: '',
                fileName: null,
            },
            id: location.hash.slice(1),
            imageFile: '',
            submit: true,
            error: null,
            lastImage: 0,
            idFirstImage: 0,
            message: ''
        },
        mounted: function() {
            var self = this;
            addEventListener('hashchange', function() {
                self.id = location.hash.slice(1);
                if (isNaN(self.id)) {
                    self.id = null;
                    location.hash = '';
                }
            })
            axios.get("/images").then(function(results) {
                console.log("ajax get /image done!");
                self.images = results.data;
                app.lastImage = app.images[app.images.length - 1].id;
                app.idFirstImage = app.images[0].id_first_image;
            })
        },
        methods: {
            imageSelected: function(e) {
                this.imageFile = e.target.files[0]
                this.submit = false
                this.error = null
            },
            removeFile: function() {
                this.imageFile = ''
                this.submit = true
            },
            upload: function() {
                var self = this
                var formData = new FormData;
                if (this.imageFile == '') {
                    this.error = 'Please select a file in order to upload'
                } else {
                    formData.append('file', this.imageFile);
                    formData.append('title', this.imageToUpload.title);
                    formData.append('desc', this.imageToUpload.desc);
                    formData.append('username', this.imageToUpload.username);
                    axios.post('/upload', formData)
                        .then(function(res) {
                            if (res.data.success) {
                                app.images.unshift(res.data.image)
                                self.imageFile = ''
                            }
                        })
                }
            },
            openModal: function(id) {
                this.id = id
                location.hash = this.id;
            },
            closeModal: function(arg) {
                this.id = arg
                location.hash = ''
            },
            moreImages: function() {
                axios.get('/' + app.lastImage)
                    .then(function(res) {
                        for (var i = 0; i < res.data.length; i++) {
                            app.images.push(res.data[i]);
                        }
                        app.lastImage = app.images[app.images.length - 1].id;
                    });
            },
            deleteImage: function(id) {
                var self = this
                self.message = 'Image deleted'
                axios.post("/deleteimage/" + id)
                    .then(function(res) {})
                this.images = this.images.filter(elem => {
                    return elem.id != id
                })
            }
        }
    })
})();
