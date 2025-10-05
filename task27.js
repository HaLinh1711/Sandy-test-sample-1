const convertNumToString = (num) => {
    output = ""
    if (num < 0) {
        output += "am "
    }

    if (num < 10) output += mapping(num)
    hang_don_vi = num % 10
    hang_chuc = Math.floor((num % 100) / 10)  // 2
    hang_tram = Math.floor((num % 1000) / 100)  // 0
    hang_nghin = Math.floor((num % 10000) / 1000)

    if (hang_nghin > 0&& hang_chuc ==0 && hang_don_vi==0)  {
        output += mapping(hang_nghin) + " nghìn"
        console.log(output.trim())
        return  
    }
    if (hang_nghin > 0 && hang_tram==0 && hang_chuc==0) {
        output += mapping(hang_nghin) + " nghìn lẻ " + mapping(hang_don_vi)
        console.log(output.trim())
        return
    }
    if (hang_nghin > 0 && hang_tram==0) {
        output += mapping(hang_nghin) + " nghìn không trăm "
    }
    if (hang_nghin > 0) {
        output += mapping(hang_nghin) + " nghìn "
    }

    if (hang_tram > 0&& hang_chuc ==0 && hang_don_vi==0)  {
        output += mapping(hang_tram) + " tram"
        console.log(output.trim())
        return
    }
    // so co 3 chu so
    if (hang_tram>0 && hang_chuc==0) {
        output += mapping(hang_tram) + " trăm lẻ " + mapping(hang_don_vi)
        console.log(output.trim())
        return
    }

   if( hang_tram>0){
    output += mapping(hang_tram) + " trăm "
   }
    // só có 2 chứ số 
    hang_chuc == 1 ? output += "mười" : output += mapping(hang_chuc) + " mươi"
    if (hang_don_vi > 0) {
        if (hang_don_vi == 1) { output += " mốt" }
        else if (hang_don_vi == 5) { output += " lăm" }
        else {
            output += " " + mapping(hang_don_vi)
        }
    }

    console.log(output.trim())
}

convertNumToString(15)
convertNumToString(95)
convertNumToString(101)
convertNumToString(111)
convertNumToString(999)
convertNumToString(901)
convertNumToString(2025) 
convertNumToString(2005)
convertNumToString(1234)  //==> "hai nghìn không trăm hai mươi lăm"