'use strict';

var expect = require('expect.js'),
    ByteUtils = require('../../lib/utils/byte-utils');

describe('ByteUtils', function() {
    describe('arrayBufferEquals', function() {
        it('should return true for equal ArrayBuffers', function () {
            var ab1 = new Int8Array([1,2,3]).buffer;
            var ab2 = new Int8Array([1,2,3]).buffer;
            expect(ByteUtils.arrayBufferEquals(ab1, ab2)).to.be(true);
        });

        it('should return false for ArrayBuffers of different length', function () {
            var ab1 = new Int8Array([1,2,3]).buffer;
            var ab2 = new Int8Array([1,2,3,4]).buffer;
            expect(ByteUtils.arrayBufferEquals(ab1, ab2)).to.be(false);
        });

        it('should return false for different ArrayBuffers', function () {
            var ab1 = new Int8Array([1,2,3]).buffer;
            var ab2 = new Int8Array([3,2,1]).buffer;
            expect(ByteUtils.arrayBufferEquals(ab1, ab2)).to.be(false);
        });
    });

    describe('bytesToString', function() {
        var str = 'utf8стрƒΩ≈ç√∫˜µ≤æ∆©ƒ∂ß';
        var arr = new Uint8Array([117,116,102,56,209,129,209,130,209,128,198,146,206,169,226,
            137,136,195,167,226,136,154,226,136,171,203,156,194,181,226,137,164,195,166,226,
            136,134,194,169,198,146,226,136,130,195,159]);

        it('should convert Array to string', function() {
            expect(ByteUtils.bytesToString(arr)).to.be(str);
        });

        it('should convert ArrayBuffer to string', function() {
            expect(ByteUtils.bytesToString(arr.buffer)).to.be(str);
        });
    });

    var base64 = 'c3Ry0L/RgNC40LLQtdGC';
    var bytes = new Uint8Array([115,116,114,208,191,209,128,208,184,208,178,208,181,209,130]);

    describe('base64ToBytes', function() {
        it('converts base64-string to byte array', function() {
            expect(ByteUtils.base64ToBytes(base64)).to.be.eql(bytes);
        });
    });

    describe('bytesToBase64', function() {
        it('converts base64-string to byte array', function() {
            expect(ByteUtils.bytesToBase64(bytes)).to.be.eql(base64);
        });
    });
});
