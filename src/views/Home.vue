<template>
  <div class="row m-0">
    <div class="col" v-if="isUserVisible">
      <h3 class="text-uppercase text-left">Users</h3>
      <ul class="list-container pl-0">
        <li class="list-unstyled m-2" v-for="user in usersList" v-bind:key="user.id" v-on:click="onClick(user)">
          <userCardComponent v-bind:user="user" />
        </li>
      </ul>
    </div>
    <div class="col" v-if="isRepoVisible">
      <div class="d-flex align-items-center desktop-hide mb-3">
        <img class="desktop-hide" src="../assets/ic_back.svg" height="18" />
        <a class="align-self-start pointer text-dark ml-2 backbtn-text desktop-hide" v-on:click="(isUserVisible = true, isRepoVisible = false)">Back</a>
      </div>
      <h3 class="text-uppercase text-left">Repositories</h3>
      <nav>
        <ul class="pagination flex-row-reverse">
          <li class="page-item">
            <button class="page-link" :disabled="pageNumber >= pageCount -1" @click="nextPage">Next</button>
          </li>
          <li class="page-item">
            <button class="page-link" :disabled="pageNumber === 0" @click="prevPage">Previous</button>
          </li>
        </ul>
      </nav>
      <div>
        <ul class="list-container pl-0 pr-3">
          <li class="list-unstyled py-3" v-for="repo in paginatedData" v-bind:key="repo.id">
            <repoCardComponent v-bind:repo="repo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import userCardComponent from "@/components/UserCard.vue";
import repoCardComponent from "@/components/RepositoryCard.vue";
import RepositoryService from "@/shared/services/repositoryService";

export default {
  name: "homeViewComponent",
  components: {
    userCardComponent,
    repoCardComponent
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 8
    }
  },
  data() {
    return {
      usersList: [],
      repoList: [],
      pageNumber: 0,
      isUserVisible: true,
      isRepoVisible: true,
      mobile: true
    };
  },
  mounted() {
    //setting mobile boolean value
    if( document.activeElement.offsetWidth >= 992 )
    {
        this.mobile = false;
    }
    //get users data
    const service = new RepositoryService();
    service.getUsers().then(response => {
      this.usersList = response.data;
      this.$store.commit("loadFileDetails", this.usersList[0]);
      this.selectedUser = response.data[0];
      this.getRepoData();
    });
  },
  methods: {
    onClick: function(user) {
      this.selectedUser = user;
      this.getRepoData();
      if(this.mobile){
        this.isUserVisible = false;
        this.isRepoVisible = true;
      }else{
          this.isUserVisible = true;
        this.isRepoVisible = true;
      }
    },
    getRepoData: function() {
      const service = new RepositoryService();
      service.getRepositories(this.selectedUser.repos_url).then(response => {
        this.repoList = response.data;
      });
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    selectedUser: {
      get() {
        return this.$store.state.selectedUser;
      },
      set(value) {
        this.$store.commit("loadFileDetails", value);
      }
    },
    rows() {
      return this.repoList.length;
    },
    pageCount() {
      let l = this.repoList.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.repoList.slice(start, end);
    }
  }
};
</script>
