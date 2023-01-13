function sostavChisla( massivChisel, chislo ) {
    // код писать только внутри данной функции
    let newArr = [];
    for ( let i = 0; i < massivChisel.length; i++ ) {
        for ( let j = i + 1; j < massivChisel.length; j++ )
            if ( massivChisel[i] + massivChisel[j] == chislo ) {
                newArr.push( [massivChisel[i], massivChisel[j]] );
                break;
            }
    }
    return newArr;
}

console.log( sostavChisla( [8, 2, 3, 4, 6, 7, 1], 5 ) );
