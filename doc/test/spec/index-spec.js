KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('blur', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/blur/2.0.0/']});