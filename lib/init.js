/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var Cassandra = require('oae-util/lib/cassandra');

require('oae-orcid/lib/principals');
require('oae-orcid/lib/internal/restclient');

module.exports = function(config, callback) {
    _ensureSchema(callback);
};

/**
 * Ensure that the all of the orcid-related schema's are created.
 *
 * @param  {Function}  callback        A function(err), specifying whether or not there was an error creating the schema.
 * @param  {Object}    callback.err    Error object, containing the error message
 * @api private
 */
var _ensureSchema = function(callback) {
    Cassandra.createColumnFamily('OrcidMembers', 'CREATE COLUMNFAMILY OrcidMembers (principalId text PRIMARY KEY, orcidId text)', callback);
};
