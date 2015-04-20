
module.exports = function(SwaggerApi) {

/**
 * Returns all pets from the system that the user has access to
 * @param {string[]} tags tags to filter by
 * @param {number} limit maximum number of results to return
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ErrorModel} result Result object
 */
SwaggerApi.findPets = function(tags, limit, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Creates a new pet in the store.  Duplicates are allowed
 * @param {PetInput} pet Pet to add to the store
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ErrorModel} result Result object
 */
SwaggerApi.addPet = function(pet, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * Returns a user based on a single ID, if the user does not have access to the pet
 * @param {number} id ID of pet to fetch
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ErrorModel} result Result object
 */
SwaggerApi.findPetById = function(id, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * deletes a single pet based on the ID supplied
 * @param {number} id ID of pet to delete
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {ErrorModel} result Result object
 */
SwaggerApi.deletePet = function(id, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}



SwaggerApi.remoteMethod('findPets',
  { isStatic: true,
  produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
  accepts: 
   [ { arg: 'tags',
       type: [ 'string' ],
       description: 'tags to filter by',
       required: false,
       http: { source: 'query' } },
     { arg: 'limit',
       type: 'number',
       description: 'maximum number of results to return',
       required: false,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'unexpected error',
       type: 'ErrorModel',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/pets' },
  description: 'Returns all pets from the system that the user has access to' }
);

SwaggerApi.remoteMethod('addPet',
  { isStatic: true,
  produces: [ 'application/json' ],
  accepts: 
   [ { arg: 'pet',
       type: 'PetInput',
       description: 'Pet to add to the store',
       required: true,
       http: { source: 'body' } } ],
  returns: 
   [ { description: 'pet response',
       type: 'Pet',
       arg: 'data',
       root: true },
     { description: 'unexpected error',
       type: 'ErrorModel',
       arg: 'data',
       root: true } ],
  http: { verb: 'post', path: '/pets' },
  description: 'Creates a new pet in the store.  Duplicates are allowed' }
);

SwaggerApi.remoteMethod('findPetById',
  { isStatic: true,
  produces: [ 'application/json', 'application/xml', 'text/xml', 'text/html' ],
  accepts: 
   [ { arg: 'id',
       type: 'number',
       description: 'ID of pet to fetch',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'pet response',
       type: 'Pet',
       arg: 'data',
       root: true },
     { description: 'unexpected error',
       type: 'ErrorModel',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/pets/:id' },
  description: 'Returns a user based on a single ID, if the user does not have access to the pet' }
);

SwaggerApi.remoteMethod('deletePet',
  { isStatic: true,
  accepts: 
   [ { arg: 'id',
       type: 'number',
       description: 'ID of pet to delete',
       required: true,
       http: { source: 'path' } } ],
  returns: 
   [ { description: 'unexpected error',
       type: 'ErrorModel',
       arg: 'data',
       root: true } ],
  http: { verb: 'delete', path: '/pets/:id' },
  description: 'deletes a single pet based on the ID supplied' }
);

}
