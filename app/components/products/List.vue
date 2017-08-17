<template>
    <div class="container">
        <h1 class="title">
            Listado de productos
        </h1>
        <b-field grouped>
            <p class="control">
                <router-link to="products/new">
                    <button class="button is-primary">
                        Nuevo
                    </button>
                </router-link>
            </p>
        </b-field>
        <hr>
        <b-table :data="productos" :bordered="isBordered" :striped="isStriped" :narrowed="isNarrowed" :checkable="isCheckable" :loading="isLoading" :mobile-cards="hasMobileCards" :paginated="isPaginated" :per-page="perPage" :pagination-simple="isPaginationSimple" default-sort="user.first_name" :selected.sync="selected" :checked-rows.sync="checkedRows">
    
            <template scope="props">
                <b-table-column field="description" label="Description" width="240" sortable>
                    {{ props.row.description }}
                </b-table-column>
                <b-table-column field="price" label="Price" width="160" sortable numeric>
                    {{ props.row.price }}
                </b-table-column>
            </template>
    
            <template slot="detail" scope="props">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                            <img src="static/img/placeholder-128x128.png">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.user.first_name }} {{ props.row.user.last_name }}</strong>
                                <small>@{{ props.row.user.first_name }}</small>
                                <small>31m</small>
                                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                    </div>
                </article>
            </template>
    
            <div slot="empty" class="has-text-centered">
                This table is empty!
            </div>
        </b-table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            checkedRows: [],
            selected: {},
            isBordered: true,
            isStriped: true,
            isNarrowed: true,
            isCheckable: false,
            isEmpty: false,
            isLoading: false,
            hasMobileCards: false,
            isPaginated: true,
            isPaginationSimple: false,
            perPage: 10
        }
    },
    computed: {
        ...mapGetters({
             productos: 'allProductos',
        })
    },
    mounted() {
        this.getProductos()
    },
    methods: {
        clearSelected() {
            this.selected = {}
        },
        clearCheckedRows() {
            this.checkedRows = []
        },
        ...mapActions([
            'getProductos'
        ]),
    }
}
</script>