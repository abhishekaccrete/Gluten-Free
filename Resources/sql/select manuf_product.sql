SELECT tblmanuf.vchName, tblproduct.vchDesc, tblproduct.flgFreeGluten, tblproduct.flgFreeEgg, tblproduct.flgFreeGM, 
tblproduct.flgFreeLactose, tblproduct.flgFreeNut, tblproduct.flgFreeWheat, tblproduct.flgIsVeggie, tblproduct.fglIsVegan,
tblproduct.flgContainsEgg, tblproduct.flgContainsNut, tblproduct.flgContainsSoya
FROM tblmanuf, tblproduct 
WHERE tblproduct.fk_idtblManuf = tblmanuf.idtblmanuf 
ORDER BY tblproduct.vchDesc ASC;
