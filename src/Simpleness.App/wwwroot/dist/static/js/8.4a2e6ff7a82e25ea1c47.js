webpackJsonp([8],{"8wHI":function(n,e,t){var r=t("S3UX");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t("rjj0")("bf5df2bc",r,!0)},S3UX:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},scgI:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("BO1k"),i=t.n(r),s=t("Dd8w"),a=t.n(s),o=t("Xxa5"),l=t.n(o),c=t("exGp"),u=t.n(c),m=t("vLgD");function d(n,e,t){return Object(m.a)({url:"api/role/update",method:"post",data:{id:n,name:e,description:t}})}function p(n,e){return Object(m.a)({url:"api/role/permission",method:"post",data:{id:n,permissions:e}})}var f={data:function(){return{roles:null,total:null,listLoading:!0,listQuery:{page:1,limit:10},form:{id:void 0,name:"",description:""},formRules:{name:[{required:!0,trigger:"blur",message:"请输入角色名称"},{message:"最大长度80个字符",trigger:blur,max:80}],description:[{message:"最大长度255个字符",trigger:"blur",max:255}]},dialogStatus:"",dialogFormVisible:!1,textMap:{create:"创建角色",update:"更新角色"},permissionStatus:!1,permissionModel:{id:void 0,title:"",permissionData:[],permissions:[]},memberStatus:!1,memberModel:{id:void 0,title:"",userIds:[],items:[]}}},methods:{getRoles:function(){var n=this;return u()(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.listLoading=!0,e.next=3,r=n.listQuery.page,i=n.listQuery.limit,Object(m.a)({url:"/api/role/list/"+r+"/"+i,method:"get"});case 3:t=e.sent,n.roles=t.items,n.total=t.totalCount,n.listLoading=!1;case 7:case"end":return e.stop()}var r,i},e,n)}))()},handleSizeChange:function(n){this.listQuery.limit=n,this.getRoles()},handleCurrentChange:function(n){this.listQuery.page=n,this.getRoles()},resetForm:function(){this.form={id:null,name:"",description:""}},handleCreate:function(){var n=this;this.resetForm(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){n.$refs.roleForm.clearValidate()})},create:function(){var n,e=this;this.$refs.roleForm.validate((n=u()(l.a.mark(function n(t){var r;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=8;break}return n.next=3,i=e.form.name,s=e.form.name.description,Object(m.a)({url:"api/role/create",method:"post",data:{name:i,description:s}});case 3:r=n.sent,e.form.id=r,e.roles.unshift(e.form),e.dialogFormVisible=!1,e.$message({message:"创建成功",type:"success"});case 8:case"end":return n.stop()}var i,s},n,e)})),function(e){return n.apply(this,arguments)}))},handleDelete:function(n){var e=this,t="确定删除 "+n.name+" 角色";this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(u()(l.a.mark(function t(){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i=n.id,Object(m.a)({url:"api/role/delete/"+i,method:"post"});case 2:r=e.roles.indexOf(n),e.roles.splice(r,1),e.$message({message:"删除成功",type:"success"});case 5:case"end":return t.stop()}var i},t,e)}))).catch(function(){e.$message({message:"取消删除",type:"warning"})})},handleUpdate:function(n){var e=this;this.form=a()({},n),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.roleForm.clearValidate()})},update:function(){var n,e=this;this.$refs.roleForm.validate((n=u()(l.a.mark(function n(t){var r,s,a,o,c,u,m,p,f,v,b;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.form,s=r.id,a=r.name,o=r.description,n.next=3,d(s,a,o);case 3:c=!0,u=!1,m=void 0,n.prev=6,p=i()(e.roles);case 8:if(c=(f=p.next()).done){n.next=17;break}if((v=f.value).id!==e.form.id){n.next=14;break}return b=e.roles.indexOf(v),e.roles.splice(b,1,e.form),n.abrupt("break",17);case 14:c=!0,n.next=8;break;case 17:n.next=23;break;case 19:n.prev=19,n.t0=n.catch(6),u=!0,m=n.t0;case 23:n.prev=23,n.prev=24,!c&&p.return&&p.return();case 26:if(n.prev=26,!u){n.next=29;break}throw m;case 29:return n.finish(26);case 30:return n.finish(23);case 31:e.dialogFormVisible=!1,e.$message({message:"更新成功",type:"success"});case 33:case"end":return n.stop()}},n,e,[[6,19,23,31],[24,,26,30]])})),function(e){return n.apply(this,arguments)}))},handleMember:function(n){var e=this;return u()(l.a.mark(function t(){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i=n.id,Object(m.a)({url:"api/role/users/"+i,method:"get"});case 2:r=t.sent,e.memberModel.id=n.id,e.memberModel.title="设置 "+n.name+" 角色成员",e.memberModel.userIds=r.selectItems,e.memberModel.items=r.items,e.memberStatus=!0;case 8:case"end":return t.stop()}var i},t,e)}))()},member:function(){var n=this;this.$confirm(this.memberModel.title,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(u()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t=n.memberModel.id,r=n.memberModel.userIds,Object(m.a)({url:"api/role/users",method:"post",data:{id:t,userids:r}});case 2:n.memberStatus=!1,n.$message({message:"设置成功",type:"success"});case 4:case"end":return e.stop()}var t,r},e,n)}))).catch(function(){n.$message({message:"取消设置",type:"warning"})})},handlePermission:function(n){var e=this;return u()(l.a.mark(function t(){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.permissionModel.id=n.id,e.permissionModel.title="设置 "+n.name+" 角色权限",t.next=4,i=n.id,Object(m.a)({url:"api/role/permission/"+i,method:"get"});case 4:r=t.sent,e.permissionModel.permissionData=[r.tree],e.permissionStatus=!0,e.$nextTick(function(){e.$refs.permissionTree.setCheckedKeys(r.selectKeys)});case 8:case"end":return t.stop()}var i},t,e)}))()},permission:function(){var n=this;this.$confirm(this.permissionModel.title,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(u()(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.$refs.permissionTree.getCheckedKeys(),e.next=3,p(n.permissionModel.id,t);case 3:n.permissionStatus=!1,n.$message({message:"设置成功",type:"success"});case 5:case"end":return e.stop()}},e,n)}))).catch(function(){n.$message({message:"取消设置",type:"warning"})})}},mounted:function(){this.getRoles()}},v={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-button",{attrs:{type:"primary"},on:{click:n.handleCreate}},[n._v("创建角色")])],1)],1),n._v(" "),t("el-table",{attrs:{data:n.roles}},[t("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),n._v(" "),t("el-table-column",{attrs:{prop:"description",label:"角色描述"}}),n._v(" "),t("el-table-column",{attrs:{label:"操作",width:"400px"},scopedSlots:n._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{type:"infor",size:"mini"},on:{click:function(t){n.handleUpdate(e.row)}}},[n._v("编辑")]),n._v(" "),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){n.handleDelete(e.row)}}},[n._v("删除")]),n._v(" "),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){n.handleMember(e.row)}}},[n._v("成员")]),n._v(" "),t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){n.handlePermission(e.row)}}},[n._v("授权")])]}}])})],1),n._v(" "),t("div",{staticClass:"pagination-container",staticStyle:{"padding-top":"20px"}},[t("el-pagination",{attrs:{background:"","current-page":n.listQuery.page,"page-sizes":[10,20,30,50],"page-size":n.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1),n._v(" "),t("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],attrs:{title:n.textMap[n.dialogStatus],visible:n.dialogFormVisible,width:"60%"},on:{"update:visible":function(e){n.dialogFormVisible=e}}},[t("el-form",{ref:"roleForm",attrs:{rules:n.formRules,model:n.form,"label-width":"80px"}},[t("el-input",{attrs:{type:"hidden"},model:{value:n.form.id,callback:function(e){n.$set(n.form,"id",e)},expression:"form.id"}}),n._v(" "),t("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[t("el-input",{model:{value:n.form.name,callback:function(e){n.$set(n.form,"name",e)},expression:"form.name"}})],1),n._v(" "),t("el-form-item",{attrs:{label:"角色描述",prop:"description"}},[t("el-input",{attrs:{type:"textarea",rows:"5"},model:{value:n.form.description,callback:function(e){n.$set(n.form,"description",e)},expression:"form.description"}})],1)],1),n._v(" "),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){n.dialogFormVisible=!1}}},[n._v(n._s(n.$t("table.cancel")))]),n._v(" "),"create"==n.dialogStatus?t("el-button",{attrs:{type:"primary"},on:{click:n.create}},[n._v(n._s(n.$t("table.confirm")))]):t("el-button",{attrs:{type:"primary"},on:{click:n.update}},[n._v(n._s(n.$t("table.confirm")))])],1)],1),n._v(" "),t("el-dialog",{attrs:{title:n.permissionModel.title,visible:n.permissionStatus,width:"40%"},on:{"update:visible":function(e){n.permissionStatus=e}}},[t("el-tree",{ref:"permissionTree",attrs:{data:n.permissionModel.permissionData,"show-checkbox":"","default-expand-all":"","node-key":"id"}}),n._v(" "),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){n.permissionStatus=!1}}},[n._v("取 消")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:n.permission}},[n._v("确 定")])],1)],1),n._v(" "),t("el-dialog",{attrs:{title:n.memberModel.title,visible:n.memberStatus,width:"40%"},on:{"update:visible":function(e){n.memberStatus=e}}},[t("div",{staticStyle:{"text-align":"center"}},[t("el-transfer",{staticStyle:{"text-align":"left",display:"inline-block"},attrs:{data:n.memberModel.items,filterable:"",titles:["未选择用户","已选择用户"]},model:{value:n.memberModel.userIds,callback:function(e){n.$set(n.memberModel,"userIds",e)},expression:"memberModel.userIds"}})],1),n._v(" "),t("span",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){n.memberStatus=!1}}},[n._v("取 消")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:n.member}},[n._v("确 定")])],1)])],1)},staticRenderFns:[]};var b=t("VU/8")(f,v,!1,function(n){t("8wHI")},null,null);e.default=b.exports}});