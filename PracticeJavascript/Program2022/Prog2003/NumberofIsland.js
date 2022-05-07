/**
 * @param {character[][]} grid
 * @return {number}
 */
//numberOfisland
 var numIslands = function(grid) {
    let countIslands = 0
    for(let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            //do something
            if(grid[rowIndex][colIndex] === '1'){
                //do something
                countIslands++
                teraForm(parseInt(rowIndex),parseInt(colIndex),grid)
            }
        }
    }
    
    return countIslands
    
};

const teraForm = (rowIn , colIn , grid) =>{
if(grid[rowIn] === undefined || grid[colIn] === undefined || grid[rowIn,colIn] == 0)return;
    grid[rowIn,colIn] = '0'
    teraForm(rowIn + 1 , colIn , grid)
    teraForm(rowIn - 1 , colIn , grid)
    teraForm(rowIn , colIn -1 , grid)
    teraForm(rowIn , colIn +1 , grid)
}