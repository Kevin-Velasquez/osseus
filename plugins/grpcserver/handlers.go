// Copyright (c) 2019 Cisco and/or its affiliates.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at:
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package grpcserver

import (
	"context"

	pb "github.com/anthonydevelops/osseus/plugins/grpcserver/model"
	"github.com/golang/protobuf/ptypes/empty"
)

// CreatePlugin inserts a new plugin into the kv
func (s *GrpcService) CreatePlugin(ctx context.Context, in *pb.CreatePluginRequest) (*pb.PluginData, error) {
	return &pb.PluginData{Id: "example", CdnLink: "example.com", Status: "OK"}, nil
}

// GetPlugin retrieves a given plugin
func (s *GrpcService) GetPlugin(ctx context.Context, in *pb.GetPluginRequest) (*pb.PluginData, error) {
	return &pb.PluginData{Id: "example", CdnLink: "example.com", Status: "OK"}, nil
}

// DeletePlugin deletes a currently stored plugin
func (s *GrpcService) DeletePlugin(ctx context.Context, in *pb.DeletePluginRequest) (*empty.Empty, error) {
	return nil, nil
}
