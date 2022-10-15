import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'gymapp.db' }); //Open database - create if the database does not exist
var tableName="extypes";
var tableName2="exdone";

//function returns a Promise - in the calling side .then(...).then(...)....catch(...) can be used
//this function intializes the database into SQLite
export const init=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('DROP TABLE IF EXISTS extypes', []);
            tx.executeSql('DROP TABLE IF EXISTS exdone', []); 
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists '+tableName+'(id integer not null primary key, name text not null, exgroup text not null);',
            [],//second parameters of execution:empty square brackets - this parameter is not needed when creating table
            //If the transaction succeeds, this is called
            ()=>{
                resolve();//There is no need to return anything
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
            
            /* tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?)', [1, 'Hauiskääntö käsipainoilla', 'Hauis']);
            tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?)', [2, 'Jalkaprässi', 'Pakarat']);
            tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?)', [3, 'Leuanveto', 'Selkälihas, epäkäs, hauis']);
            tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?)', [4, 'Ristikkäistalja', 'Rintalihakset']);
            tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?)', [5, 'Vatsarutistukset', 'Suorat vatsalihakset']); */

            tx.executeSql('insert into ' +tableName+ ' (id, name, exgroup) values (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?), (?,?,?)', 
            [   1, 'Hauiskääntö käsipainoilla', 'Hauis' ,
                2, 'Jalkaprässi', 'Pakarat', 
                3, 'Leuanveto', 'Selkälihas, epäkäs, hauis',
                4, 'Ristikkäistalja', 'Rintalihakset',
                5, 'Vatsarutistukset', 'Suorat vatsalihakset',
                6, 'Alatalja', 'Leveä selkälihas , epäkäs, hauis',
                7, 'Dippi', 'Rinta, ojentajat, etuolkapäät',
                8, 'Kyykky', 'Pakarat, etureidet',
                9, 'Maastaveto', 'Suorat selkälihakset, pakarat, etureidet',
                10, 'Pohjeprässi seisten', 'Pohje- ja kaksoiskantalihas',
                11, 'Polven ojennus laitteessa', 'Etureidet',
                12, 'Pään yli ojennus taljassa', 'Ojentajat',
                13, 'Ristiveto maaten taljassa', 'Takaolkapäät',
                14, 'Penkkipunnerrus levytangolla', 'Rinta, ojentajat, etuolkapäät',
                15, 'Kulmasoutu', 'Leveä selkälihas, epäkäs, hauis',
            ]);
            
            tx.executeSql('create table if not exists '+tableName2+
            '(id integer not null primary key, date text not null, reps integer not null, sets integer not null, typeid integer not null, FOREIGN KEY(typeid) REFERENCES extypes(id));',
            [],
            ()=>{
                resolve();
            },(_,err)=>{
                reject(err);
            }
            );

            /* tx.executeSql('insert into ' +tableName2+ ' (id, date, reps, sets, typeid) values (?,?,?,?,?)', [1, '2022-10-08', 20, 5, 2]);
            tx.executeSql('insert into ' +tableName2+ ' (id, date, reps, sets, typeid) values (?,?,?,?,?)', [2, '2022-10-08', 10, 10, 5]);
            tx.executeSql('insert into ' +tableName2+ ' (id, date, reps, sets, typeid) values (?,?,?,?,?)', [3, '2022-10-07', 20, 15, 4]);
            tx.executeSql('insert into ' +tableName2+ ' (id, date, reps, sets, typeid) values (?,?,?,?,?)', [4, '2022-10-07', 30, 20, 1]); */

            tx.executeSql('insert into ' +tableName2+ ' (id, date, reps, sets, typeid) values ' +
            '(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),'+
            '(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),'+
            '(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?), (?,?,?,?,?),(?,?,?,?,?),'+
            '(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),'+
            '(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?)', 
            [   1, '2022-10-08', 20, 5, 2,
                2, '2022-10-08', 10, 10, 5,
                3, '2022-10-07', 20, 15, 4,
                4, '2022-10-07', 30, 20, 1,
                5, '2022-10-06', 25, 12, 10,
                6, '2022-10-06', 5, 5, 9,
                7, '2022-10-06', 17, 5, 6,
                8, '2022-10-19', 22, 10, 7,
                9, '2022-10-04', 33, 1, 5,
                10, '2022-10-04', 5, 5, 8,
                11, '2022-10-06', 7, 8, 3,
                12, '2022-10-06', 14, 8, 7,
                13, '2022-10-30', 10, 10, 15,
                14, '2022-10-09', 15, 6, 8,
                15, '2022-10-10', 13, 6, 8,
                16, '2022-10-20', 20, 4, 8,
                17, '2022-10-12', 10, 8, 8,
                18, '2022-10-13', 21, 5, 8,
                19, '2022-10-31', 18, 7, 8,
                20, '2022-11-10', 11, 17, 5,
                21, '2022-10-06', 12, 20, 2,
                22, '2022-11-02', 7, 16, 12,
                23, '2022-12-24', 12, 20, 10,
                24, '2022-12-06', 19, 20, 3,
                25, '2023-01-15', 6, 6, 6,
            ]);  
        });
             
    });
    return promise;
};

//function reads all the distinct dates of done excercises 
export const fetchExDoneDays=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{            
            tx.executeSql('select distinct date from exdone' , [],
                (tx, result)=>{
                    let items=[];                    
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));                       
                    }                   
                    resolve(items);
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};


//function reads all the information about all done exercises from both tables
export const fetchAllExDone=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{            
            tx.executeSql('select exdone.id, exdone.typeid, exdone.date, extypes.name, extypes.exgroup, exdone.reps, exdone.sets from exdone inner join extypes on extypes.id = exdone.typeid' , [],
                (tx, result)=>{
                    let items=[];//Create a new empty Javascript array
                    //And add all the items of the result (database rows/records) into that table
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));                       
                    }                   
                    resolve(items);//The data the Promise will have when returned
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

//function reads all the exercises done on a specific date
export const fetchExByDay=(day)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{            
            tx.executeSql('select exdone.id, exdone.date, exdone.typeid, extypes.name, extypes.exgroup, exdone.reps, exdone.sets from exdone inner join extypes on extypes.id = exdone.typeid where exdone.date like ?' ,
             [day],
                (tx, result)=>{
                    let items=[];                  
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));                       
                    }                   
                    resolve(items);
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

//function updates reps and sets of an exercise with the specific id 
export const updateExById=(id, reps, sets)=>{    
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('update '+tableName2+' set reps=?, sets=? where id=?;',
            //And the values come here
            [reps, sets, id],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

//this function deletes an exercise with a given id from the database
export const deleteEx=(id)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('delete from '+tableName2+' where id=?;',
            [id],
            ()=>{
                    resolve();
            },
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

//function reads top 5 reps*sets exercises done that have the same id
export const fetchAllExById=(id)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{            
            tx.executeSql('select exdone.id, exdone.date, extypes.name, exdone.reps, exdone.sets from exdone inner join extypes on extypes.id = exdone.typeid where exdone.typeid=? order by (reps*sets) desc limit 5' ,
             [id],
                (tx, result)=>{
                    let items=[];                   
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));                       
                    }                   
                    resolve(items);
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

/*this function is used to get exercise types to homescreen workout form 
so that user can choose which exercise he wants to do today*/
export const fetchExerciseTypes=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{            
            tx.executeSql('select * from '+tableName, [],
                (tx, result)=>{
                    resolve(result.rows.raw());
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

// This function adds a new type of exercise into the database
export const addNewEx=(newEx, newExGroup)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('insert into '+tableName+'(name, exgroup) values(?,?);',
            [newEx, newExGroup],
            ()=>{
                    resolve();
            },
            (_,err)=>{
                    reject(err);
            }
            );
        });
    });
    return promise;
};