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

var RestAPI = require('oae-rest');
var RestUtil = require('oae-rest/lib/util');

/**
 * The Orcid namespace for the RestAPI object
 */
RestAPI.Orcid = {};

/**
 * Create a new ORCID Member record
 *
 * @param  {RestContext}  restCtx         Standard REST Context object that contains the current tenant URL and the current user credentials
 * @param  {Function}     callback        Standard callback method
 * @param  {Object}       callback.err    Error object containing error code and error message
 * @param  {Object}       callback.res    Response object containing status code and confirmation message
 */
RestAPI.Orcid.createOrcidMemberRecord = function(restCtx, callback) {
    RestUtil.RestRequest(restCtx, '/api/orcid/create', 'POST', null, callback);
};

/**
 * Return an Orcid member record by the specified identifier
 *
 * @param  {RestContext}  restCtx            Standard REST Context object that contains the current tenant URL and the current user credentials
 * @param  {Object}       parameters         RestUtil parameters object
 * @param  {Function}     callback           Standard callback method
 * @param  {Object}       callback.err       Error object containing error code and error message
 * @param  {Object}       callback.record    The ORCID member record
 */
RestAPI.Orcid.getOrcidRecord = function(restCtx, parameters, callback) {
    RestUtil.RestRequest(restCtx, '/api/orcid/search', 'GET', parameters, callback);
};
