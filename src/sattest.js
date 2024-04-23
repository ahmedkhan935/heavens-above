const { getTable } = require('./satellite');
const request = require('request');
const fs = require('fs');
jest.mock('request');
jest.mock('fs');

describe('getTable', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        request.mockClear();
        fs.mockClear();
    });

    it('should call request with correct options when counter is 0', () => {
        const config = {
            database: [],
            counter: 0,
            opt: 0,
            root: 'root/',
            target: 'target'
        };
        getTable(config);
        expect(request).toHaveBeenCalled();
    });

    it('should call request with correct options when counter is not 0', () => {
        const config = {
            database: [],
            counter: 1,
            opt: 0,
            root: 'root/',
            target: 'target'
        };
        getTable(config);
        expect(request).toHaveBeenCalled();
    });

    it('should create directory if it does not exist', () => {
        const config = {
            database: [],
            counter: 0,
            opt: 0,
            root: 'root/',
            target: 'target'
        };
        fs.existsSync.mockReturnValue(false);
        getTable(config);
        expect(fs.mkdir).toHaveBeenCalled();
    });

    it('should not create directory if it exists', () => {
        const config = {
            database: [],
            counter: 0,
            opt: 0,
            root: 'root/',
            target: 'target'
        };
        fs.existsSync.mockReturnValue(true);
        getTable(config);
        expect(fs.mkdir).not.toHaveBeenCalled();
    });
});