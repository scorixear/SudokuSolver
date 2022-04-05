<script lang="ts">
import TheCell from "./TheCell.vue";
import { defineComponent } from "vue";
import { SudokuSolver } from "../model/SudokuSolver";

export default defineComponent({
  methods: {
    solve() {
      const grid: number[][] = [];
      for (let i = 0; i < 9; i++) {
        grid[i] = [];
        for (let j = 0; j < 9; j++) {
          grid[i][j] = 0;
        }
      }
      this.transformCellsToBoard(grid);
      if(SudokuSolver.solveBoard(grid)) {
        this.transformBoardToCells(grid);
      }
    },
    transformCellsToBoard(grid: number[][]) {
      for (let i = 0; i < 9; i++) {
        const components: any[] = <Array<any>>this.$refs["block-" + i];
        for(const component of components) {
          if (component.value !== "") {
            grid[component.row][component.col] = parseInt(component.value, 10);
          }
        }
      }
    },
    transformBoardToCells(grid: number[][]) {
      for (let i = 0; i < 9; i++) {
        const components: any[] = <Array<any>>this.$refs["block-" + i];
        for(const component of components) {
          component.value = grid[component.row][component.col];
        }
      }
    },
    clear() {
      for (let i = 0; i < 9; i++) {
        const components: any[] = <Array<any>>this.$refs["block-" + i];
        for(const component of components) {
          component.value = "";
        }
      }
    }
  },
  components: {
    TheCell,
  },
});
</script>
<template>
  <div class="sudoku">
    <div class="row">
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3)"
          :col="(index-1) % 3"
          ref="block-0"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3)"
          :col="(index-1) % 3 + 3"
          ref="block-1"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3)"
          :col="(index-1) % 3 + 6"
          ref="block-2"
        />
      </div>
    </div>
    <div class="divider-horizontal" />
    <div class="row">
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 3"
          :col="((index-1) % 3)"
          ref="block-3"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 3"
          :col="((index-1) % 3) + 3"
          ref="block-4"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 3"
          :col="((index-1) % 3) + 6"
          ref="block-5"
        />
      </div>
    </div>
    <div class="divider-horizontal" />
    <div class="row">
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 6"
          :col="((index-1) % 3)"
          ref="block-6"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 6"
          :col="((index-1) % 3) +  3"
          ref="block-7"
        />
      </div>
      <div class="divider-vertical" />
      <div class="block">
        <TheCell
          v-for="index in 9"
          :key="index"
          :row="Math.floor((index-1) / 3) + 6"
          :col="((index-1) % 3) + 6"
          ref="block-8"
        />
      </div>
    </div>
  </div>
  <div class="button">
    <button @click="solve">Solve</button>
    <button @click="clear">Clear</button>
  </div>
</template>
<style scoped>
.sudoku {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  gap: 1rem;
}

.block {
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(3, 4rem);
  gap: 1rem;
}

.divider-vertical {
  border-left: 6px solid #ccc;
  align-self: stretch;
}

.divider-horizontal {
  border-top: 6px solid #ccc;
  width: 100%;
}

button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  min-width: 10rem;
  height: 3rem;
}
.button {
  margin: 1rem auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
}
</style>
