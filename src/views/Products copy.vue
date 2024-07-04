<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-data-table-virtual :headers="headers" :items="products" height="400"
              item-value="name"></v-data-table-virtual>
          </v-col>
          <v-col cols="2"></v-col>
        </v-row>

      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-btn @click="signin">Login</v-btn>

      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </v-container>


</template> -->

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
          <template v-slot:append>
            <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <!-- <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item> -->
          <v-list-item prepend-icon="mdi-account" title="Manage Products" value="products"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="Logout"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-row no-gutters>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                  <v-data-table-virtual :headers="headers" :items="products" height="400"
                    item-value="name"></v-data-table-virtual>
                </v-col>
                <v-col cols="2"></v-col>
              </v-row>

            </v-col>
          </v-row>

        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
      headers: [
        { title: 'Product Code', align: 'start', key: 'productcode' },
        { title: 'Stocks', align: 'end', key: 'stocks' },
        { title: 'Name', align: 'end', key: 'name' },
        { title: 'Description', align: 'center', key: 'description' },
        { title: 'Category', align: 'end', key: 'category' },
        { title: 'Cost ($)', align: 'end', key: 'cost' },
        { title: 'Selling Price ($)', align: 'end', key: 'sellingPrice' },
      ],
      products: [
        {
          productcode: 1,
          stocks: 33,
          name: 'Rice',
          description: ' Is A Cereal Grain And In Its Domesticated Form Is The Staple Food For Over Half Of The Worlds Human Population',
          category: 'Pasta, Rice & Cereal',
          cost: 50,
          sellingPrice: 60
        },
        {
          productcode: 2,
          stocks: 55,
          name: 'Salt',
          description: 'Also Called Sodium Chloride Mineral Substance Of Great Importance To Human And Animal Health As Well As To Industry.',
          category: 'Condiments & Spices',
          cost: 20,
          sellingPrice: 25
        },
        {
          productcode: 3,
          stocks: 18,
          name: 'Cooking Oil',
          description: 'Is A Plant Or Animal Liquid Fat Used In Frying Baking And Other Types Of Cooking.',
          category: 'Condiments & Spices',
          cost: 25,
          sellingPrice: 30
        },
        {
          productcode: 4,
          stocks: 38,
          name: 'Coffee',
          description: ' Beverage Brewed From The Roasted And Ground Seeds Of The Tropical Evergreen Coffee Plant Of African Origin.',
          category: 'Beverages',
          cost: 15,
          sellingPrice: 20
        },
        {
          productcode: 5,
          stocks: 56,
          name: 'Sugar',
          description: ' Any Of Numerous Sweet Colourless Water-Soluble Compounds.',
          category: 'Condiments & Spices',
          cost: 60,
          sellingPrice: 70
        },
        {
          productcode: 6,
          stocks: 42,
          name: 'Bread',
          description: 'Baked Food Product Made Of Flour Or Meal That Is Moistened, Kneaded, And Sometimes Fermented.',
          category: 'Pastry',
          cost: 15,
          sellingPrice: 20
        },
        {
          productcode: 7,
          stocks: 57,
          name: 'Onion',
          description: 'Herbaceous Biennial Plant In The Amaryllis Family Grown For Its Edible Bulb. ',
          category: 'Vegetables',
          cost: 10,
          sellingPrice: 12
        },
        {
          productcode: 8,
          stocks: 56,
          name: 'Garlic',
          description: 'Origin And Major Types. Subspecies And Varieties. Cultivation. Production. Properties. History. ',
          category: 'Vegetables',
          cost: 5,
          sellingPrice: 7
        },
        {
          productcode: 9,
          stocks: 58,
          name: 'Eggs',
          description: 'Fresh Chicken Eggs',
          category: 'Dairy',
          cost: 5,
          sellingPrice: 10
        },
        {
          productcode: 10,
          stocks: 24,
          name: 'Pork Meat',
          description: 'Tender Pork Meats',
          category: 'MEAT',
          cost: 350,
          sellingPrice: 400
        },
        {
          productcode: 11,
          stocks: 45,
          name: 'Beef Meat',
          description: 'High Quality Beef',
          category: 'MEAT',
          cost: 400,
          sellingPrice: 450
        },
        {
          productcode: 12,
          stocks: 12,
          name: 'Chicken Meat',
          description: 'Fresh And Well Fed Farm Chicken Meat',
          category: 'MEAT',
          cost: 250,
          sellingPrice: 300
        },
        {
          productcode: 13,
          stocks: 89,
          name: 'Vinegar',
          description: 'Sour Liquid Made By Fermenting Any Of Numerous Dilute Alcoholic Liquids Into A Liquid Containing Acetic Acid. ',
          category: 'Condiments & Spices',
          cost: 10,
          sellingPrice: 15
        },
        {
          productcode: 14,
          stocks: 74,
          name: 'Ajinomoto',
          description: 'A Familiar Term To Describe The Widely Used Flavor Enhancer Most People Are Unaware Of Msgs',
          category: 'Condiments & Spices',
          cost: 5,
          sellingPrice: 7
        },
        {
          productcode: 15,
          stocks: 46,
          name: 'Instant Noodles',
          description: 'Instant Noodles Or Instant Ramen Is A Type Of Food Consisting Of Noodles Sold In A Precooked.',
          category: 'Pasta, Rice & Cereal',
          cost: 15,
          sellingPrice: 20
        },
        {
          productcode: 16,
          stocks: 45,
          name: 'Biscuits',
          description: ' A Small Quick Bread Usually Made From Flour Salt And Butter Or Vegetable Shortening With Baking Powder As A Leavening Agent.',
          category: 'Pastry',
          cost: 10,
          sellingPrice: 15
        },
        {
          productcode: 17,
          stocks: 15,
          name: 'Tomatoes',
          description: 'Lowering Plant Of The Nightshade Family  Cultivated Extensively For Its Edible Fruits.',
          category: 'Vegetables',
          cost: 6,
          sellingPrice: 8
        },
        {
          productcode: 18,
          stocks: 78,
          name: 'Eggplant',
          description: 'Is A Delicate Tropical Perennial Plant Often Cultivated As A Tender.',
          category: 'Vegetables',
          cost: 10,
          sellingPrice: 15
        },
        {
          productcode: 19,
          stocks: 72,
          name: 'Powedered Milk',
          description: 'Dried Milk Or Dry Milk Is A Manufactured Dairy Product Made By Evaporating Milk To Dryness. ',
          category: 'Beverages',
          cost: 25,
          sellingPrice: 30
        }
      ],
    }
  },
  methods: {


  }


}
</script>