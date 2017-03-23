# 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

class Tree
  attr_accessor :root
  def initialize(root = Node.new)
    @root = root
  end
end

class Graph
  attr_accessor :nodes 
  def initialize(nodes)
    @nodes = nodes 
  end

  def answerthequestiondummy
  end
end

class Node 
  attr_accessor :value, :children

  def initialize(value)
    @value = value
    @children = []
  end

  def add_children(new_children)
    new_children.each do |child|
      @children.push(child)
    end
  end

  def to_s
    value.to_s
  end
end

node_0 = Node.new(0)
node_1 = Node.new(1)
node_2 = Node.new(2)
node_3 = Node.new(3)
node_4 = Node.new(4)
node_5 = Node.new(5)

node_2.add_children([node_1])
node_3.add_children([node_4, node_2])
node_1.add_children([node_4, node_3])
node_0.add_children([node_5, node_1, node_4])

directed_graph = Graph.new([node_0, node_1, node_2, node_3, node_4, node_5,])

puts(directed_graph.nodes)


